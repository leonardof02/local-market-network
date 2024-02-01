import { RegisterFormState } from "@/types/ui/RegisterFormState";
import { supabase } from "./supabase";

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

  static async createNewUserProfile(formData: RegisterFormState, userId: string) {
    const { data, error } = await supabase.from("user_profile").insert([
      {
        full_name: formData.fullName,
        contact: formData.contact,
        profile_image_url: formData.profileImageUrl,
        user_id: userId,
      },
    ]);

    if (error) throw error;
    return data;
  }

  static async registerUser(formData: RegisterFormState) {
    const userId = await UserService.signUpUser(formData);
    if (!userId) return;
    const data = await UserService.createNewUserProfile(formData, userId);
    console.log(data);
  }
}
