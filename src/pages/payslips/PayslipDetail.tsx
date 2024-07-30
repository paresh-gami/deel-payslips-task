import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonButtons,
  IonBackButton,
  IonFooter,
} from "@ionic/react";
import { RouteComponentProps } from "react-router-dom";
import { mockPayslips } from "../../data/mockPayslips";
import DownloadFileComponent from "../../components/DownloadFileComponent";
import MainContainer from "../../components/MainContainer/MainContainer";

const PayslipDetail: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const payslip = mockPayslips.find((p) => p.id === match.params.id);

  if (!payslip) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/payslips" />
            </IonButtons>
            <IonTitle>Payslip Not Found</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p className="ion-text-center">
            Payslip with ID {match.params.id} not found.
          </p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/payslips" />
          </IonButtons>
          <IonTitle>Payslip Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <MainContainer>
          <IonLabel>
            <h2>ID: {payslip.id}</h2>
            <p>From: {payslip.fromDate}</p>
            <p>To: {payslip.toDate}</p>
            <p>File Name: {payslip.file.path}</p>
          </IonLabel>
        </MainContainer>
      </IonContent>
      <IonFooter class="ion-padding">
        <DownloadFileComponent fileLink={payslip.file} />
      </IonFooter>
    </IonPage>
  );
};

export default PayslipDetail;
