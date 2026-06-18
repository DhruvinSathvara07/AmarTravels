export const WHATSAPP_NUMBER = "919725409908";

export const WHATSAPP_MESSAGE = `Hello Amar Travels,

I am interested in your car rental, bus rental, tours and travels services.

Please share vehicle availability, pricing and booking details.

Thank you.`;

export const getWhatsAppLink = (message = WHATSAPP_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const CONTACT_PHONE = "+91 97254 09908";
export const CONTACT_PHONE_RAW = "+919725409908";
export const CONTACT_EMAIL = "info@amartravels.com";

export const handleContactAction = (e) => {
  if (e) e.preventDefault();
  
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1024) {
      window.open(
        getWhatsAppLink(),
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      window.location.href = `tel:${CONTACT_PHONE_RAW}`;
    }
  }
};
