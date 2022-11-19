import axios from "axios";

export default class APIService {
  static key = "aUbi1odiGKxy4wg97CJhTfVaKsy7U4Pl";

  static async getConvertionFromTo(from, to, amount) {
    const response = await axios.get(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
      {
        headers: {
          'apikey': this.key,
        }
      }
    );
    return response;
  }

  static async getCurranciesByBase(base) {
    const response = await axios.get(`https://api.apilayer.com/fixer/latest?base=${base}`,
      {
        headers: {
          'apikey': this.key,
        }
      }
    );
    return response;
  }

  static async getSymbols() {
    const response = await axios.get("https://api.apilayer.com/fixer/symbols",
      {
        headers: {
          'apikey': this.key,
        }
      }
    );
    return response;
  }
}