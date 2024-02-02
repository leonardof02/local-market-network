import { v4 as uuidv4 } from "uuid";
import { supabase } from "./supabase";
import { RegisterFormState } from "@/types/ui/RegisterFormState";
import { FilePaths } from "@/types/services/storage";

export class UserService {
  static async signUpUser(formData: RegisterFormState) {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) throw error;
    if (data.user) return data.user.id;
  }

  static async uploadProfileImage(file: File) {
    const fileName = uuidv4();
    const filePath = `${FilePaths.UPLOAD_PATH}/${fileName}`;
    const { data, error } = await supabase.storage.from("profile_images").upload(filePath, file);

    if (error) throw error;
    return data.path;
  }

  static async createNewUserProfile(
    formData: RegisterFormState,
    userId: string,
    profileImageUrl: string | null
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
    let profileImageUrl = null;
    const userId = await UserService.signUpUser(formData);
    if (formData.profileImage && formData.profileImage[0] != null)
      profileImageUrl = await UserService.uploadProfileImage(formData.profileImage[0]);
    if (!userId) return;
    const data = await UserService.createNewUserProfile(formData, userId, profileImageUrl);
    console.log(data);
  }
}
