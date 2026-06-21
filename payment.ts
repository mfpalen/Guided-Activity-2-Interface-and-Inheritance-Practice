interface PaymentMethod {
  pay(amount: number): void;
}

class GCashPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ₱${amount} using GCash.`);
  }
}

class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    
    console.log(`Paid ₱${amount} using card.`);
  }
}

abstract class Transaction {
  constructor(protected transactionId: string) {}

  printTransactionId(): void {
    console.log(`Transaction ID: ${this.transactionId}`);
  }

  abstract process(): void;
}

class OnlineTransaction extends Transaction {
  constructor(
    transactionId: string,
    private paymentMethod: PaymentMethod,
    private amount: number
  ) {
    super(transactionId);
  }

  process(): void {
    this.printTransactionId();
    this.paymentMethod.pay(this.amount);
  }
}

const transaction = new OnlineTransaction("TXN-001", new GCashPayment(), 500);
transaction.process();
