"use strict";

class GCashPayment {
  pay(amount) {
    console.log(`Paid ₱${amount} using GCash.`);
  }
}

class CardPayment {
  pay(amount) {
    console.log(`Paid ₱${amount} using card.`);
  }
}

class Transaction {
  constructor(transactionId) {
    this.transactionId = transactionId;
  }

  printTransactionId() {
    console.log(`Transaction ID: ${this.transactionId}`);
  }

  process() {
    throw new Error("Abstract method 'process()' must be implemented.");
  }
}

class OnlineTransaction extends Transaction {
  constructor(transactionId, paymentMethod, amount) {
    super(transactionId);
    this.paymentMethod = paymentMethod;
    this.amount = amount;
  }

  process() {
    this.printTransactionId();
    this.paymentMethod.pay(this.amount);
  }
}

const transaction = new OnlineTransaction("TXN-001", new GCashPayment(), 500);
transaction.process();
