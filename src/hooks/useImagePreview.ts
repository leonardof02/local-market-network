import { useState, useEffect } from "react";

/**
 * Hook para visualizar la imagen pasada como parametro a traves de su URL
 * @param imageFile La imagen en formato de archivo (File o Blob)
 * @returns Un url que respresenta la vista de la imagen (Ej: `<img src={previewUrl}/>` mostrará la imagen)
 */
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
