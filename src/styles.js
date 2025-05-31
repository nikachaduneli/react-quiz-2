const getStyles = (darkMode) => ({

  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },

  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
    borderRadius: "10px"
  },

  searchWrapper: {
    position: 'relative',
    width: '60%',
    margin: '0 auto 20px',
  },

  searchInput: {
    width: '100%',
    padding: '12px 40px 12px 16px',
    fontSize: '16px',
    borderRadius: '5px',
    border: darkMode? '2px solid #888' : '2px solid #6C63FF',
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#252525',
    outline: 'none',
  },

  searchBtn: {
    position: 'relative',
    right: '50px',
    top: '42px',
    transform: 'translateY(-50%)',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: 'purple',
    padding: '0',
    userSelect: 'none',
  },

  button: {
    padding: '12px 20px',
    fontSize: '18px',
    borderRadius: '12px',
    border: '2px solid #6C63FF',
    backgroundColor: '#6C63FF',
    color: 'white',
    cursor: 'pointer',
  },

  list: {
    listStyle: 'none',
    padding: 0,
  },

  listItem: {
    padding: '10px 14px',
    marginBottom: '8px',
    color: darkMode ? '#fff' : '#252525',
    borderRadius: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  taskText: {
    margin: "1em 1em 1em -10em",
    fontWeight: "bold",
    fontSize: '20px'
  },

  deleteBtn: {
    marginLeft: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'crimson',
    fontSize: '18px',
    cursor: 'pointer',
  },

  line: {
    margin: "1em 0em 1em 0em",
    border: 'none',
    height: '1px',
    backgroundColor: '#6C63FF',
  },

  fab: {
    position: 'relative',
    bottom: '-10px',
    left: '270px',
    backgroundColor: '#6C63FF',
    color: 'white',
    fontSize: '28px',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },

  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },

  popup: {
    backgroundColor: darkMode ? '#252525' : '#fff',
    color: darkMode ? '#fff' : '#252525',
    padding: '20px',
    borderRadius: '12px',
    border: darkMode? '2px solid #888': 'none' ,
    width: '90%',
    maxWidth: '400px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },

  popupInput: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: darkMode? '2px solid #888': '2px solid #6C63FF' ,
    width: '90%',
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#252525',
  },

  popupAddBtn: {
    marginRight: '10px',
    padding: '10px 16px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#6C63FF',
    color: 'white',
    cursor: 'pointer',
  },

  popupCancelBtn: {
    padding: '10px 16px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #6C63FF',
    color: "#6C63FF",
    fontWeight: "bold",
    backgroundColor: darkMode ? '#252525' : '#f2f2f2',
    cursor: 'pointer',
  },

  filterSelect: {
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '2px solid #6C63FF',
    backgroundColor: '#6C63FF',
    color: 'white',
    outline: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '10px',
  },

  filterOption: {
    backgroundColor: darkMode ? '#333' : 'white',
    color: '#6C63FF',
  },

  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "100px"
  },

  darkModeButton: {
    width: "60px",
    height: "30px",
    padding: "10px",
    backgroundColor: "#6C63FF",
    borderRadius: "5px"
  }
});

export default getStyles;
