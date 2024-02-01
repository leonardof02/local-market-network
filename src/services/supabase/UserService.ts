import { RegisterFormState } from "@/types/ui/RegisterFormState";
import { supabase } from "./supabase";
import { FilePaths } from "@/types/services/storage";

export class UserService {
  static async signUpUser(formData: RegisterFormState) {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) throw error;
    if (!data.user) return;

    return data.user.id;
  }

  static async uploadProfileImage(file: File) {
    const filePath = `${FilePaths.UPLOAD_PATH}/${file.name}`;
    const { data, error } = await supabase.storage.from("profile_images").upload(filePath, file);

    if (error) throw error;
    return data.path;
  }

  static async createNewUserProfile(
    formData: RegisterFormState,
    userId: string,
    profileImageUrl?: string
  ) {
    const { data, error } = await supabase.from("user_profile").insert([
      {
        full_name: formData.fullName,
        contact: formData.contact,
        profile_image_url: profileImageUrl,
        user_id: userId,
      },
    ]);

    if (error) throw error;
    return data;
  }

  static async registerUser(formData: RegisterFormState) {
    const userId = await UserService.signUpUser(formData);
    const profileImageUrl = formData.profileImage && await UserService.uploadProfileImage(formData.profileImage[0])
    if (!userId) return;
    const data = await UserService.createNewUserProfile(formData, userId, profileImageUrl );
    console.log(data);
  }
}
