import React, { useState } from 'react';  // تأكد من أن هذا هو السطر الوحيد الذي يستورد React

const AddChildForm = ({ onAddOrUpdateChild, editMode, child }) => {
  const [name, setName] = useState(child ? child.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddOrUpdateChild({
      name,
      questions: child ? child.questions : []
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Child Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <button type="submit">{editMode ? 'Update Child' : 'Add Child'}</button>
    </form>
  );
};

export default AddChildForm;
