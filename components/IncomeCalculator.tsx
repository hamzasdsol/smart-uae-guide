'use client';

import { useState } from 'react';

export default function IncomeCalculator() {
  const [basicSalary, setBasicSalary] = useState<string>('');
  const [housingAllowance, setHousingAllowance] = useState<string>('');
  const [transportAllowance, setTransportAllowance] = useState<string>('');
  const [otherAllowances, setOtherAllowances] = useState<string>('');
  const [bonus, setBonus] = useState<string>('');
  const [commission, setCommission] = useState<string>('');
  const [sideIncome, setSideIncome] = useState<string>('');
  const [investment, setInvestment] = useState<string>('');

  const parseNumber = (value: string): number => {
    const num = parseFloat(value);
    return isNaN(num) ? 0 : num;
  };

  const regularIncome =
    parseNumber(basicSalary) +
    parseNumber(housingAllowance) +
    parseNumber(transportAllowance) +
    parseNumber(otherAllowances);

  const irregularIncome =
    parseNumber(bonus) +
    parseNumber(commission) +
    parseNumber(sideIncome) +
    parseNumber(investment);

  const totalIncome = regularIncome + irregularIncome;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Income Calculator</h3>

      {/* Regular Income Section */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-900 mb-3">Regular Monthly Income</p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 w-40">Basic Salary:</label>
            <div className="flex-1 flex items-center">
              <span className="text-sm text-gray-600 mr-2">AED</span>
              <input
                type="number"
                value={basicSalary}
                onChange={(e) => setBasicSalary(e.target.value)}
                placeholder="0"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 w-40">Housing Allowance:</label>
            <div className="flex-1 flex items-center">
              <span className="text-sm text-gray-600 mr-2">AED</span>
              <input
                type="number"
                value={housingAllowance}
                onChange={(e) => setHousingAllowance(e.target.value)}
                placeholder="0"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 w-40">Transport Allowance:</label>
            <div className="flex-1 flex items-center">
              <span className="text-sm text-gray-600 mr-2">AED</span>
              <input
                type="number"
                value={transportAllowance}
                onChange={(e) => setTransportAllowance(e.target.value)}
                placeholder="0"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 w-40">Other Allowances:</label>
            <div className="flex-1 flex items-center">
              <span className="text-sm text-gray-600 mr-2">AED</span>
              <input
                type="number"
                value={otherAllowances}
                onChange={(e) => setOtherAllowances(e.target.value)}
                placeholder="0"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-900">Total Regular Income:</span>
              <span className="text-lg font-bold text-gray-900">AED {regularIncome.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Irregular Income Section */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-900 mb-3">Irregular Income (Monthly Average)</p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 w-40">Performance Bonuses:</label>
            <div className="flex-1 flex items-center">
              <span className="text-sm text-gray-600 mr-2">AED</span>
              <input
                type="number"
                value={bonus}
                onChange={(e) => setBonus(e.target.value)}
                placeholder="0"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 w-40">Commission:</label>
            <div className="flex-1 flex items-center">
              <span className="text-sm text-gray-600 mr-2">AED</span>
              <input
                type="number"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                placeholder="0"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 w-40">Side Income:</label>
            <div className="flex-1 flex items-center">
              <span className="text-sm text-gray-600 mr-2">AED</span>
              <input
                type="number"
                value={sideIncome}
                onChange={(e) => setSideIncome(e.target.value)}
                placeholder="0"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-700 w-40">Investment Returns:</label>
            <div className="flex-1 flex items-center">
              <span className="text-sm text-gray-600 mr-2">AED</span>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                placeholder="0"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-900">Total Irregular Income:</span>
              <span className="text-lg font-bold text-gray-900">AED {irregularIncome.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Total Section */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-md font-semibold text-gray-900">Total Monthly Income:</span>
          <span className="text-2xl font-bold text-gray-900">AED {totalIncome.toLocaleString()}</span>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          💡 Budget only on regular income; use irregular income for savings/debt repayment
        </p>
      </div>
    </div>
  );
}
