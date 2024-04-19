const today = new Date();
today.setDate(today.getDate() - 1);
export const finalDate = today.toISOString().slice(0, 10);
