import React, { FC, useState } from "react";
import { IStateName, ActionNameType } from "../reducers/name/types";
import { useDispatch, useSelector } from "react-redux";

const Name: FC = () => {
  const name = useSelector<IStateName, string>(a => a.name.value);
  const [v, setV] = useState<string>(name);
  const dispatch = useDispatch();
  const dispatchChange = () =>
    dispatch({ type: ActionNameType.CHANGE, payload: { value: v } });
  return (
    <div>
      <input type="text" value={v} onChange={e => setV(e.target.value)} />
      <button onClick={dispatchChange}>Change</button>
    </div>
  );
};

export default Name;
