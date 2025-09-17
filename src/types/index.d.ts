type PointerPosition = "up" | "down" | "right";

declare type ProgressStepsProps = {
  steps?: number;
  current?: number;
};

declare type CardComponentProps = {
    image: string;
    alt: string;
    title: string;
    position: PointerPosition;
}

type TrianglePointerProps = {
    position: PointerPosition;
}