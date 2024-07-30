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
} from "@ionic/react";
import { RouteComponentProps } from "react-router-dom";
import { mockPayslips } from "../../data/mockPayslips";

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
        <IonContent>
          <IonLabel>Payslip with ID {match.params.id} not found.</IonLabel>
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
      <IonContent>
        <IonLabel>
          <h2>ID: {payslip.id}</h2>
          <p>From: {payslip.fromDate}</p>
          <p>To: {payslip.toDate}</p>
          <p>File Name: {payslip.file.name}</p>
        </IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default PayslipDetail;
