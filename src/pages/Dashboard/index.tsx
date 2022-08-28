import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ActivityItem,
  EmptyImage,
  GlobalTemplate,
  HeaderMenu,
  ModalDelete,
} from "../../components";
import { Api } from "../../utils/api";

interface GetAllActivity {
  id: number;
  email: string;
  title: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export default function Dashboard() {
  const [data, setData] = useState<Array<GetAllActivity>>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activityId, setActivityId] = useState<number>(0);
  const [activityName, setActivityName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllData();
  }, [isLoading]);

  const getAllData = async () => {
    const res = await axios.get(`${Api.host}/activity-groups`);
    console.log(res.data.data);

    if (res.status === 200) {
      setIsLoading(false);
      setData(res.data.data);
    }
  };

  const onCreateActivity = async () => {
    setIsLoading(true);
    const res = await axios.post(`${Api.host}/activity-groups`, {
      title: "New Activity ku",
      email: "yayaktaka@gmail.com",
    });
    if (res.status === 200) {
      setIsLoading(false);
    }
  };

  // funciton untuk memunculkan modal hapus activity
  const onModalShow = (id: number, activity: string) => {
    setShowModal(true);
    setActivityId(id);
    setActivityName(activity);
  };

  const onDelete = async () => {
    setIsLoading(true);
    const res = await axios.delete(`${Api.host}/activity-groups/${activityId}`);
    if (res.status === 200) {
      setShowModal(false);
      setIsLoading(false);
    }
  };

  return (
    <GlobalTemplate>
      <HeaderMenu
        dataCy="activity-add-button"
        title="Activity"
        onAddButton={onCreateActivity}
      />

      {isLoading ? (
        <div className="h-96 flex justify-center items-center font-poppins-light text-2xl text-grey">
          Loading...
        </div>
      ) : data?.length == 0 ? (
        <EmptyImage dataCy="activity-empty-state" isNewActivityPage={false} />
      ) : (
        <>
          <div className="grid grid-flow-row grid-cols-4 gap-5 mt-12">
            {data!.map((activity, key) => {
              return (
                <ActivityItem
                  key={key}
                  index={key}
                  title={activity.title}
                  date={activity.created_at}
                  onDelete={() => onModalShow(activity.id, activity.title)}
                  nextPage={`/detail/${activity.id}`}
                />
              );
            })}
          </div>
          {showModal && (
            <ModalDelete
              activity={activityName}
              onCancel={() => setShowModal(false)}
              onDelete={onDelete}
            />
          )}
        </>
      )}
    </GlobalTemplate>
  );
}
