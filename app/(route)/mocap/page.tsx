"use client";
import React from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "../../../utils/utilities";
import Link from "next/link";

function Page() {
  const webcamRef = React.useRef<any>(null);
  const canvasRef = React.useRef(null);

  const runPosenet = async () => {
    const net = await posenet.load({
      architecture: "MobileNetV1",
      outputStride: 16,
      inputResolution: { width: 640, height: 480 },
    });
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net: any) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video as HTMLVideoElement;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      video.width = videoWidth;
      video.height = videoHeight;
      const pose = await net.estimateSinglePose(video);
      console.log(pose);
      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef.current);
    }
  };

  const drawCanvas = (
    pose: any,
    video: any,
    videoWidth: any,
    videoHeight: any,
    canvas: any
  ) => {
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = videoWidth;
      canvas.height = videoHeight;

      drawKeypoints(pose["keypoints"], 0.6, ctx);
      drawSkeleton(pose["keypoints"], 0.6, ctx);
    }
  };

  runPosenet();

  return (
    <>
      <Webcam
        ref={webcamRef}
        className="absolute ml-auto mr-auto left-0 right-0 text-center z-9"
        style={{ width: "100vw", height: "100vh" }}
      />
      <canvas
        ref={canvasRef}
        className="absolute ml-auto mr-auto left-0 right-0 text-center z-9"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default Page;
