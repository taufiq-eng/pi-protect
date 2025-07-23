export const BLACKLISTED_ADDRESSES = [
  "GC57QZW3PEPF7APNSAXN6LXT3ST6FX56ZERAGSYBDBKIFSNDC4PUARJR"
];

export function isBlacklisted(address) {
  return BLACKLISTED_ADDRESSES.includes(address);
}
