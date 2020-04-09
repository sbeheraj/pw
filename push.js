var push = require('web-push')

// let rs = push.generateVAPIDKeys()

// console.log(rs);

let vapidKeys= {
    publicKey: 'BCYiSQU2m78bZQQiKvvdhn3HO_3OfNh251vzP495-Cqsj5KYM4-ZBrCNtvViYnMmZiro5HYAiJ8P-fRaejDC5eg',
    privateKey: 'EfxvpCtjQ-jCK8V7KZS_7ztg0AyS1d9du02L9cPUTs8'
  }

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub={};
push.sendNotification(sub, 'test message')