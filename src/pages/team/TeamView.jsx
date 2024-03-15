import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { animationVariants } from "./animationVariants";
import { team } from "./team";
import { ArrowLeft } from "../../components/Arrow/ArrowLeft";


export const TeamView = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  return (
    <div className="pt-[90px] pb-[90px] bg-black text-white" id="team">
      <div className="max-w-[90rem] mx-auto pb-[90px] px-5">
        <h2 className="mb-16 font-medium text-[3.375rem] leading-none tracking-[1px] text-center">
          Meet the team
        </h2>
        <div className="flex justify-between items-center mb-16">
          {page - 1 >= 0 ? (
            <button
              className="flex items-center w-[320px] gap-1 lg:gap-6"
              onClick={() => setPage([page - 1, -1])}
            >
              <ArrowLeft />
              <span className="flex items-start flex-col gap-2 font-medium lg:text-2xl opacity-60">
                <span>{team[page - 1].position}</span>
              </span>
            </button>
          ) : (
            <div className="w-[320px] max-w-[100%]" />
          )}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`member-avatar-${page}`}
              custom={direction}
              variants={animationVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.2,
              }}
              className="relative mx-auto"
            >
              <img
                // @ts-ignore
                src={team[page].avatar}
                className="lg:max-w-[80%] mx-auto rounded-[1.75rem] object-cover"
                alt=""
              />
              <div className="absolute lg:bottom-6 lg:left-24 z-10">
                <span className="flex items-start flex-col gap-2 font-medium lg:text-2xl drop-shadow">
                  <span>{team[page].position}</span>
                  <span className="hidden lg:flex lg:text-lg text-white text-opacity-60">
                    {team[page].position}
                  </span>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          {page + 1 < team.length ? (
            <button
              className="flex justify-end items-center w-[320px] max-w-[100%] gap-1 lg:gap-6"
              onClick={() => setPage([page + 1, 1])}
            >
              <span className="flex items-end flex-col gap-2 font-medium lg:text-2xl opacity-60">
                <span>{team[page + 1].position}</span>
              </span>
              <ArrowLeft className="rotate-180" />
            </button>
          ) : (
            <div className="w-[320px]" />
          )}
        </div>
        <div className="flex justify-center gap-1 lg:gap-6">
          {team.map((member, i) => (
            <div className="flex flex-col items-center gap-[1.375rem]" key={i}>
              <button
                className="rounded-xl"
                onClick={() => setPage([i, i > page ? 1 : -1])}
              >
                <img
                  // @ts-ignore
                  src={member.avatar}
                  className="w-[6.25rem] max-w-[100%] max-h-[100%] h-[6.25rem] object-cover rounded-xl"
                  alt=""
                />
              </button>
              <AnimatePresence>
                {i === page && (
                  <motion.div
                    key={`member-avatar-${page}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-3 h-3 rounded-full bg-white"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
