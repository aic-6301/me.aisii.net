import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-sm w-full animate-fade-in">
          <h2 className="text-lg font-semibold mb-4">確認</h2>
          <p>移動してもよろしいですか？</p>
          <p  className="mb-4">新しいタブで開きます。</p>
          <div className="flex justify-end">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
              onClick={onCancel}
            >
              キャンセル
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              onClick={onConfirm}
            >
              移動
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onCancel}></div>
    </>
  );
};

export default ConfirmModal;
