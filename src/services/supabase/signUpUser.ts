import { supabase } from "./supabase";

export async function signUpUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    if (error) throw error;
    return data.user;
  }