export default function Viewer() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://aditya098.shapespark.com/scene/"
        className="w-full h-full border-none"
        allow="gyroscope; accelerometer; xr-spatial-tracking; vr;"
        allowFullScreen
      />
    </div>
  );
}
