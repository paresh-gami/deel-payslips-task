import React from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { mockPayslips } from "../../data/mockPayslips";
import { Payslip } from "../../types/Payslip";
import MainContainer from "../../components/MainContainer/MainContainer";

const PayslipList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Payslips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <MainContainer>
          <IonList>
            {mockPayslips.map((payslip: Payslip) => (
              <IonItem
                key={payslip.id}
                routerLink={`/payslip/${payslip.id}`}
                detail
              >
                <IonLabel>
                  <h2>ID: {payslip.id}</h2>
                  <p>From: {payslip.fromDate}</p>
                  <p>To: {payslip.toDate}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </MainContainer>
      </IonContent>
    </IonPage>
  );
};

export default PayslipList;
