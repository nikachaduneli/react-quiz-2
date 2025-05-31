import React from 'react';

function Popup({ inputValue, setInputValue, onAdd, onCancel, styles }) {
  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popup}>
        <h2 style={{fontWeight: "bold"}}>NEW NOTE</h2>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Input your note..."
          style={styles.popupInput}
        />
        <div style={styles.buttonBox}>
          <button onClick={onCancel} style={styles.popupCancelBtn}>CANCEL</button>
          <button onClick={onAdd} style={styles.popupAddBtn}>APPLY</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;