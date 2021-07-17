Aliaksei Lapionak
============

-------------------                 --------------------------
**E-mail**: [aleks.lapenok@gmail.com](aleks.lapenok@gmail.com)
**Discord**: Alexey Lapenok(@alexeylapenok)
**Phone**: +375(33)329-73-17 Minsk Belarus                          
-------------------                 --------------------------

About 
----------


Skills
--------------------
- HTML
- CSS
- GIT
- JS
- REACT

My code
---------
My code for adding a task to a task list in React:
```javascript (React)
addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.unshift({
        id: tasks.length || 0,
        title: task,
        done: false,
        isImportant: false
      })
      return state;
    });
  };
```

