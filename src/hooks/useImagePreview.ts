import { useState, useEffect } from "react";

export default function useImagePreview(imageFile?: File[]) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imageFile) {
      const objectUrl = URL.createObjectURL(imageFile[0]);
      setPreviewUrl(objectUrl);
    }
  }, [imageFile]);

  return previewUrl;
}
