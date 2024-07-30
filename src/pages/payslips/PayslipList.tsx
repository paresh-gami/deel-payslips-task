import React, { useEffect, useState } from "react";
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
import "animate.css";

const PayslipList: React.FC = () => {
  const [payslips, setPayslips] = useState<Payslip[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setPayslips(mockPayslips);
    }, 500); // Simulate fetching data
  }, []);
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
            <IonTitle size="large">Payslips</IonTitle>
          </IonToolbar>
        </IonHeader>

        <MainContainer>          
          <IonList>
            {payslips.map((payslip: Payslip, index) => (
              <IonItem
                key={payslip.id}
                routerLink={`/payslip/${payslip.id}`}
                detail
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
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
