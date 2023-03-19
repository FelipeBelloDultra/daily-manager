class Utils {
  private isCryptoAvailable(): boolean {
    return (
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    );
  }

  private generateRandomString(): string {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 15);

    return `${timestamp}-${randomString}`;
  }

  public generateRandomId(): string {
    if (this.isCryptoAvailable()) {
      return crypto.randomUUID();
    }

    return this.generateRandomString();
  }
}

export const utils = new Utils();
