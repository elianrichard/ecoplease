type Props = "request_sample" | "catalog" | "custom" | "partner";

const whatsappHref = (params?: Props) => {
  const message = () => {
    switch (params) {
      case "request_sample":
        return "Halo Ecoplease, mau request free sample dong!";
      case "catalog":
        return "Halo Ecoplease, mau request catalog dong!";
      case "custom":
        return "Halo Ecoplease, mau request custom design produk dong!";
      case "partner":
        return "Halo Ecoplease, mau jadi partner eco-warriors dong!";
      default:
        return "Halo Ecoplease, mau tanya-tanya dong!";
    }
  };
  const phone = "6287888199947";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message())}`;
  return href;
};

export default whatsappHref;
