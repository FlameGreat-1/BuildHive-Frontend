import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { faApplePay, faGooglePay, faStripe } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePageTitle } from "../dashboard/Dashboard";

export default function WithdrawFunds() {
  const availableBalance = 1200; // Example balance, pass from props if needed
  const minimumWithdrawal = 10;

  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [error, setError] = useState("");

  const paymentMethods = [
    {
      id: "googlepay",
      name: "Google Pay",
      info: "Link your Google account",
      icon: <FontAwesomeIcon size="2xl" icon={faGooglePay}/>,
    },
    {
      id: "applepay",
      name: "Apple Pay",
      info: "john@apple.com",
      icon: <FontAwesomeIcon size="2xl" icon={faApplePay}/>,
    },
    {
      id: "stripe",
      name: "Stripe",
      info: "Connect your bank account",
      icon: <FontAwesomeIcon size="2xl" icon={faStripe}/>,
    },
  ];

  const handleAmountChange = (value: string) => {
    setAmount(value);

    const numValue = Number(value);

    if (!numValue) {
      setError("");
      return;
    }

    if (numValue < minimumWithdrawal) {
      setError(`Minimum withdrawal is $${minimumWithdrawal}`);
    } else if (numValue > availableBalance) {
      setError("Insufficient funds");
    } else {
      setError("");
    }
  };

  const setPageTitle = usePageTitle()
  useEffect(()=>{
    setPageTitle('Withdraw Funds')
  },[])

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Withdraw Funds</h1>

      {/* Balance + Amount */}
      <div className="bg-white rounded-2xl border shadow p-6 mb-6">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Available Balance</span>
          <span className="text-lg font-semibold md:text-xl text-primary-purple">${availableBalance}</span>
        </div>
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Amount to Withdraw
          </label>
          <div className="flex items-center bg-slate-500/20 text-black border rounded-lg px-3 py-2">
            <span className="font-bold mr-2">$</span>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
              className="flex-1  placeholder:text-black outline-none border-none bg-transparent"
            />
          </div>
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-2xl border shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <button
              type="button"
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`w-full bg-light-white border-black flex items-center justify-between border rounded-lg px-4 py-3 transition ${selectedMethod === method.id
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 hover:border-purple-400"
                }`}
            >
              <div className="flex items-center gap-3">
                {/* <img
                  src={method.icon}
                  alt={method.name}
                  className="w-8 h-8 object-contain"
                /> */}
                {method.icon}
                <div className="text-left">
                  <p className="font-medium">{method.name}</p>
                  <p className="text-xs text-gray-500">{method.info}</p>
                </div>
              </div>
              <div
                className={`w-4 h-4 rounded-full border ${selectedMethod === method.id
                  ? "bg-purple-500 border-purple-500"
                  : "border-gray-300"
                  }`}
              />
            </button>
          ))}

          {/* Add new (hidden but kept in code) */}
          <button
            type="button"
            className="hidden w-full  items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 text-gray-500 hover:border-purple-400 hover:text-purple-600"
          >
            <Plus className="w-4 h-4" />
            Add New Method
          </button>
        </div>
      </div>

      {/* Info + Withdraw (hidden until method selected & no error) */}
      {selectedMethod && (
        <>
          <p className="text-xs text-gray-500 mb-4 md:text-sm"> <b className="text-primary-purple mr-1 border-2 border-primary-purple px-1 rounded-[50%] ">!</b>
            Funds will typically arrive in 1-3 business days depending on the selected
            payment method and bank processing time.
          </p>
          {!error && amount && (
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition">
              Withdraw Now
            </button>
          )}
        </>
      )}
    </div>
  );
}