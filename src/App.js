import getStyles from './styles.js';
import React, { useState, useEffect } from 'react';
import PopUp from './PopUp.js';
import DetectiveSvg from './detective.js';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });  
  const styles = getStyles(darkMode)
  const [popupInput, setPopupInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.style.backgroundColor = darkMode ? '#252525' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#000000';
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesStatus =
      filter === 'complete' ? task.completed :
      filter === 'incomplete' ? !task.completed : true;

    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });


  const handleAddTask = () => {
    if (popupInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: popupInput, completed: false }]);
      setPopupInput('');
      setShowPopup(false);
    }
  };

  const switchDarkMode = () => {
    setDarkMode(darkMode => !darkMode)
  }

  return (
    <div style={styles.container}>
      <h1>TODO LIST</h1>
      <div style={styles.inputContainer}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search note ..."
          style={styles.searchInput}
        />
        <div style={styles.searchBtn}>
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7773 20.184L15.9056 15.312H15.8531C17.3547 13.5415 18.1136 11.2588 17.9709 8.94156C17.8282 6.62433 16.7951 4.45202 15.0876 2.87905C13.3801 1.30608 11.1306 0.454303 8.80958 0.501892C6.48855 0.549481 4.27583 1.49275 2.63427 3.13439C0.992706 4.77602 0.0494786 6.98885 0.00189181 9.30999C-0.045695 11.6311 0.806045 13.8808 2.37894 15.5883C3.95184 17.2958 6.12404 18.329 8.44117 18.4717C10.7583 18.6144 13.0408 17.8555 14.8113 16.3539C14.8113 16.3539 14.8113 16.3914 14.8113 16.4063L19.6831 21.2783C19.7527 21.3485 19.8356 21.4043 19.927 21.4424C20.0183 21.4804 20.1163 21.5 20.2152 21.5C20.3141 21.5 20.4121 21.4804 20.5034 21.4424C20.5948 21.4043 20.6777 21.3485 20.7473 21.2783C20.8242 21.2103 20.8862 21.1272 20.9296 21.0342C20.9731 20.9412 20.9969 20.8402 20.9997 20.7376C21.0025 20.635 20.9842 20.533 20.946 20.4377C20.9077 20.3425 20.8503 20.2561 20.7773 20.184ZM9.00276 16.9685C7.5204 16.9685 6.07133 16.5289 4.83879 15.7053C3.60625 14.8817 2.64561 13.7111 2.07833 12.3415C1.51106 10.9719 1.36263 9.46488 1.65183 8.01094C1.94102 6.55699 2.65485 5.22146 3.70303 4.17322C4.75122 3.12499 6.08669 2.41113 7.54057 2.12192C8.99445 1.83272 10.5014 1.98115 11.871 2.54845C13.2405 3.11575 14.411 4.07644 15.2346 5.30904C16.0581 6.54163 16.4977 7.99077 16.4977 9.4732C16.4977 10.4575 16.3038 11.4322 15.9272 12.3415C15.5505 13.2509 14.9985 14.0772 14.3025 14.7732C13.6065 15.4692 12.7803 16.0213 11.871 16.3979C10.9616 16.7746 9.98701 16.9685 9.00276 16.9685Z" fill="#6C63FF"/>
          </svg>
        </div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={styles.filterSelect}>
          <option value="all" style={styles.filterOption}>All</option>
          <option value="complete" style={styles.filterOption}>Complete</option>
          <option value="incomplete" style={styles.filterOption}>Incomplete</option>
        </select>

        <div onClick={switchDarkMode} style={{cursor: "pointer"}}>
          {!darkMode ? (
            <svg width="22" height="22" viewBox="0 0 22 22" style={styles.darkModeButton} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1249 0.548798C11.3387 0.917354 11.321 1.3762 11.0791 1.72705C10.3455 2.79152 9.91599 4.08062 9.91599 5.47334C9.91599 9.12428 12.8757 12.084 16.5266 12.084C17.9194 12.084 19.2085 11.6545 20.2729 10.9208C20.6238 10.6791 21.0826 10.6613 21.4512 10.8751C21.8197 11.089 22.0319 11.4962 21.9961 11.9208C21.5191 17.567 16.7867 22 11.0178 22C4.93282 22 0 17.0672 0 10.9822C0 5.21328 4.43301 0.480873 10.0792 0.00392422C10.5038 -0.0319387 10.911 0.180242 11.1249 0.548798ZM8.17985 2.63461C4.70452 3.81573 2.20355 7.10732 2.20355 10.9822C2.20355 15.8502 6.14981 19.7964 11.0178 19.7964C14.8927 19.7964 18.1843 17.2955 19.3654 13.8202C18.4741 14.1232 17.5191 14.2875 16.5266 14.2875C11.6587 14.2875 7.71244 10.3413 7.71244 5.47334C7.71244 4.48086 7.87682 3.52582 8.17985 2.63461Z" fill="#F7F7F7"/>
          </svg>
           ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" style={styles.darkModeButton}  fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1576 1.15764C12.1576 0.518299 11.6394 0 11 0C10.3606 0 9.84235 0.518299 9.84235 1.15764V1.73887C9.84235 2.37822 10.3606 2.89651 11 2.89651C11.6394 2.89651 12.1576 2.37822 12.1576 1.73887V1.15764ZM18.7782 4.85893C19.2302 4.40683 19.2302 3.67386 18.7782 3.22177C18.3261 2.76969 17.5931 2.76969 17.141 3.22177L16.73 3.63282C16.2779 4.08492 16.2779 4.81789 16.73 5.26998C17.182 5.72206 17.915 5.72206 18.3671 5.26998L18.7782 4.85893ZM4.85889 3.22184C4.40681 2.76976 3.67383 2.76976 3.22175 3.22184C2.76967 3.67393 2.76967 4.4069 3.22175 4.859L3.63273 5.26998C4.08483 5.72206 4.8178 5.72206 5.26989 5.26998C5.72197 4.81789 5.72197 4.08492 5.26989 3.63282L4.85889 3.22184ZM1.15764 9.84235C0.518299 9.84235 0 10.3606 0 11C0 11.6394 0.518299 12.1576 1.15764 12.1576H1.73884C2.37819 12.1576 2.89648 11.6394 2.89648 11C2.89648 10.3606 2.37819 9.84235 1.73884 9.84235H1.15764ZM20.2611 9.84235C19.6217 9.84235 19.1035 10.3606 19.1035 11C19.1035 11.6394 19.6217 12.1576 20.2611 12.1576H20.8424C21.4817 12.1576 22 11.6394 22 11C22 10.3606 21.4817 9.84235 20.8424 9.84235H20.2611ZM5.26989 18.3672C5.72197 17.9151 5.72197 17.1821 5.26989 16.7301C4.8178 16.2779 4.08483 16.2779 3.63273 16.7301L3.22177 17.141C2.76968 17.5931 2.76968 18.3261 3.22176 18.7782C3.67385 19.2302 4.40682 19.2302 4.85892 18.7782L5.26989 18.3672ZM18.3671 16.7301C17.915 16.2779 17.182 16.2779 16.73 16.7301C16.2779 17.1821 16.2779 17.9151 16.73 18.3672L17.1409 18.7782C17.5931 19.2303 18.326 19.2303 18.7782 18.7782C19.2302 18.3261 19.2302 17.5932 18.7782 17.141L18.3671 16.7301ZM12.1576 20.2611C12.1576 19.6217 11.6394 19.1035 11 19.1035C10.3606 19.1035 9.84235 19.6217 9.84235 20.2611V20.8424C9.84235 21.4817 10.3606 22 11 22C11.6394 22 12.1576 21.4817 12.1576 20.8424V20.2611ZM6.36943 11C6.36943 8.4426 8.4426 6.36943 11 6.36943C13.5573 6.36943 15.6305 8.4426 15.6305 11C15.6305 13.5573 13.5573 15.6305 11 15.6305C8.4426 15.6305 6.36943 13.5573 6.36943 11ZM11 4.05415C7.1639 4.05415 4.05415 7.1639 4.05415 11C4.05415 14.8361 7.1639 17.9458 11 17.9458C14.8361 17.9458 17.9458 14.8361 17.9458 11C17.9458 7.1639 14.8361 4.05415 11 4.05415Z" fill="#F7F7F7"/>
            </svg>
            )
          }
          
        </div>
      </div>
      {filteredTasks.length === 0 ? (
        <DetectiveSvg/>
       ) : (
        // Show task list
        <ul style={styles.list}>
          {filteredTasks.map((task, index) => (
            <div key={task.id}>
              <li style={styles.listItem}>
                <input
                  type='checkbox'
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <div style={{ textAlign: "left" }}>
                  <span
                    style={{
                      ...styles.taskText,
                      textDecoration: task.completed ? 'line-through' : 'none'
                    }}
                  >
                    {task.text}
                  </span>
                </div>
                <button onClick={() => deleteTask(task.id)} style={styles.deleteBtn}>x</button>
              </li>
              {index !== filteredTasks.length - 1 && <hr style={styles.line} />}
            </div>
          ))}
        </ul>
      )}
      <button onClick={() => setShowPopup(true)} style={styles.fab}>+</button>
      {showPopup && (
        <PopUp
        inputValue={popupInput}
        setInputValue={setPopupInput}
        onAdd={handleAddTask}
        onCancel={() => setShowPopup(false)}
        styles={styles}
        />
      )}
    </div>
  );
}

export default App;
