import { supabase } from "./supabase";

export class UserService {
  static async signUpUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) throw error;
    return data;
  }
}
