const API_URL = import.meta.env.VITE_API_URL;


export interface ContactData {

  name: string;

  email: string;

  message: string;

}



export const sendContactMessage = async (
  data: ContactData
) => {


  const response = await fetch(
    API_URL,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),

    }
  );



  if (!response.ok) {

    const errorText = await response.text();

    throw new Error(
      errorText || "Failed to send message"
    );

  }



  return response.json();

};