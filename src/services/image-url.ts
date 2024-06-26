import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

//insert crop into img url returned from api to reduce file size
//add default img for games with no img

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
