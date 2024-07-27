import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({
      success: false,
      message: "Please use a POST method",
    });

  const contactData = JSON.parse(req.body);
  const { error } = await supabase.from("contacts").insert([contactData]);

  if (error)
    res.status(500).json({
      success: false,
      message: "Could not send your message. Please Try Again",
    });

  res.status(200).json({
    success: true,
    message: "Thanks for your message. We will be in touch soon :)",
  });
}
