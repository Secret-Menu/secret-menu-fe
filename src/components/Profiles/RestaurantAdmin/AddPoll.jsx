import React from 'react';

export default function AddPoll() {
  //handleChange
  //handleSubmit
  return (
    <div>
      <form onSubmit={handleAddOffering}>
        <input type="text" value={name} name="pollName" onChange={handleChange} placeholder="Poll Name" />

        <input type="text" value={offering1Name} name="offering1Name" onChange={handleChange} placeholder="First Offering" />

        <input type="text" value={offering2Name} name="offering2Name" onChange={handleChange} placeholder="Second Offering" />

        <input type="date" value={end} name="end" onChange={handleChange} placeholder="End date" />

        <input type="text" value={offering1Description} name="offering1Description" onChange={handleChange} placeholder="First offering description" />

        <input type="text" value={offering2Description} name="offering2Description" onChange={handleChange} placeholder="First offering description" />

        <input type="text" value={offering1ImageUrl} name="offering1ImageUrl" onChange={handleChange} placeholder="First offering image url" />

        <input type="text" value={offering2ImageUrl} name="offering2ImageUrl" onChange={handleChange} placeholder="Second offering image url" />

        <button>Submit</button>
      </form>
    </div>
  );
}
