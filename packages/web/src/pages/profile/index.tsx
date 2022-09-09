import { Button, Paper, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { Avatar } from "~/components/Avatar";
import useAuth from "~/hooks/useAuth";
import { MainLayout } from "~/layouts/MainLayout";
import { ProfileButton } from "./Button";
import { CardMetric } from "./Metrics/Card";

export const ProfilePage = () => {
  const { currentUser, loading } = useAuth();
  useEffect(() => {}, []);
  return (
    <MainLayout>
      <div className="flex flex-col w-full h-full justify-center items-center space-y-3 px-4 pt-4">
        <div className="flex w-full justify-center items-center">
          <Avatar
            loading={loading}
            name={currentUser?.name ?? "User"}
            size={80}
          />

          <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full ml-4 rounded leading-none">
            <div className="flex flex-row items-center sm:items-start sm:justify-start justify-center w-full h-full text-white text-center sm:text-left">
              <div className="flex flex-col justify-center items-center">
                {loading ? (
                  <Skeleton height={32} width="100%">
                    <h3 className="text-2xl font-bold ">
                      {currentUser?.name}
                    </h3>
                  </Skeleton>
                ) : (
                  <h3 className="text-2xl font-bold ">
                    {currentUser?.name}
                  </h3>
                )}

                {loading ? (
                  <Skeleton width={"100%"} height={20} />
                ) : (
                  <p className="text-sm">{currentUser?.email}</p>
                )}
              </div>
            </div>
            <div className="flex space-x-4 w-full sm:w-80 h-full justify-center items-center">
              <ProfileButton>Compartilhar</ProfileButton>
            </div>
          </div>
          <div />
        </div>
        <div className="flex space-x-5 justify-center w-full my-3">
          <CardMetric value={100} title="Visitas" />
          <CardMetric value={50} title="Perguntas" />
          <CardMetric value={20} title="Respostas" />
        </div>
        <h5 className="text-white font-semibold uppercase">Destaques</h5>
        <div className="bg-slate-700 w-full h-full border border-slate-800 p-2 rounded"></div>
      </div>
    </MainLayout>
  );
};
