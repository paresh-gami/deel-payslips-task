import React from "react";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Capacitor, HttpResponse } from "@capacitor/core";
import { CapacitorHttp } from "@capacitor/core";
import { IonButton, IonIcon } from "@ionic/react";
import { showToast } from "../utils/toast";
import { fileTrayFull } from 'ionicons/icons';
import MainContainer from "./MainContainer/MainContainer";

interface FileLink {
  path: string;
  mimeType: string;
}

interface DownloadFileComponentProps {
  fileLink: FileLink;
}

const checkAndRequestPermissions = async () => {
  const permissions = await Filesystem.checkPermissions();
  console.log(permissions);
  if (permissions.publicStorage !== 'granted') {
    const request = await Filesystem.requestPermissions();
    if (request.publicStorage !== 'granted') {
      showToast({ message: "Permission to access storage is required." });
      return false;
    }
  }
  return true;
};

const downloadFile = async (path: string, mimeType: string) => {
  try {
    const url = `${path}`;
    if (Capacitor.getPlatform() === "web") {
      const response = await fetch(url);
      const blob = await response.blob();
      const urlObject = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = urlObject;
      a.download = path;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(urlObject);
      showToast({ message: `File ${path} downloaded and saved successfully.` });
    } else {
      const hasPermissions = await checkAndRequestPermissions();
      if (!hasPermissions) return;

      const options = {
        method: "GET",
        url: url,
        responseType: "blob" as const,
      };

      const response: HttpResponse = await CapacitorHttp.get(options);

      const blob = new Blob([response.data], { type: mimeType });

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result as string;

        await Filesystem.writeFile({
          path: `Documents/${path.split("/").pop()}`,
          data: base64data,
          directory: Directory.Documents,
          recursive: true,
        });
        showToast({ message: `File ${path} downloaded and saved successfully.` });
      };
      reader.readAsDataURL(blob);
    }
  } catch (error) {
    console.error(`Error downloading file ${path}`, error);
  }
};

const DownloadFileComponent: React.FC<DownloadFileComponentProps> = ({
  fileLink,
}) => {
  const downloadFileHandler = () => {
    downloadFile(fileLink.path, fileLink.mimeType);
  };

  return (
    <MainContainer>
      <IonButton expand="full" onClick={downloadFileHandler}>
        <IonIcon icon={fileTrayFull}></IonIcon>&nbsp;
        Download Slip
      </IonButton>
    </MainContainer>
  );
};

export default DownloadFileComponent;
