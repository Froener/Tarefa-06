// src/Styled/Skeleton.jsx
import styled, { keyframes, css } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const SkeletonWrapper = styled.div`
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #f3f4f6;
  overflow: hidden;
  animation: ${pulse} 1.5s infinite;

  [data-theme="dark"] & {
    background: #1f2937;
    border-color: #374151;
  }
`;

const ImageSkeleton = styled.div`
  padding-bottom: 100%;
  background: #f3f4f6;

  [data-theme="dark"] & {
    background: #374151;
  }
`;

const TextSkeleton = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

/* shared skeleton block styles (background, radius, dark-mode) */
const skeletonBlock = css`
  background: #e5e7eb;
  border-radius: 0.25rem;

  /* dark-mode override (documentElement has data-theme="dark") */
  [data-theme="dark"] & {
    background: #4b5563;
  }
`;

/* concrete skeleton blocks */
const TextSkeletonTitle = styled.div`
  ${skeletonBlock}
  width: 80%;
  height: 1.25rem;
`;

const TextSkeletonPrice = styled.div`
  ${skeletonBlock}
  width: 50%;
  height: 1.5rem; /* fixed: match original size (was 5rem by mistake) */
`;

const TextSkeletonButton = styled.div`
  ${skeletonBlock}
  width: 100%;
  height: 2.5rem;
`;

export default function SkeletonCard() {
  return (
    <SkeletonWrapper>
      <ImageSkeleton />
      <TextSkeleton>
        <TextSkeletonTitle />
        <TextSkeletonPrice />
        <TextSkeletonButton />
      </TextSkeleton>
    </SkeletonWrapper>
  );
}
