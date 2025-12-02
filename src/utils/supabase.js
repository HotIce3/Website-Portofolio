import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions
export const getMenu = async () => {
  const { data, error } = await supabase
    .from("menu")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const getMenuById = async (id) => {
  const { data, error } = await supabase
    .from("menu")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

export const getTestimonials = async () => {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const createOrder = async (orderData) => {
  const { data, error } = await supabase
    .from("orders")
    .insert([orderData])
    .select();

  if (error) throw error;
  return data[0];
};

export const getOrders = async () => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const updateOrder = async (id, updates) => {
  const { data, error } = await supabase
    .from("orders")
    .update(updates)
    .eq("id", id)
    .select();

  if (error) throw error;
  return data[0];
};

// Upload image to Supabase Storage
export const uploadImage = async (file, bucket = "menu-images") => {
  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file);

  if (error) throw error;

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(fileName);

  return publicUrl;
};
