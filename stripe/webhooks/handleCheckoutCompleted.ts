export async function handleCheckoutCompleted(session: any) {
  console.log('Checkout completed:', session);
  // Add logic to update user record, grant access, etc.
}

// 📁 stripe/webhooks/handleSubscriptionUpdated.ts
export async function handleSubscriptionUpdated(subscription: any) {
  console.log('Subscription updated:', subscription);
  // Sync subscription info with your database here.
}
