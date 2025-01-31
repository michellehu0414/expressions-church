from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time
import subprocess

class HTMLChangeHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.src_path.endswith(".html"):
            print(f"📝 Detected change in {event.src_path}. Pushing update...")
            subprocess.run(["python", "update_elementor.py"])

path = "../webpack-project/dist/pages/"
event_handler = HTMLChangeHandler()
observer = Observer()
observer.schedule(event_handler, path, recursive=True)
observer.start()

print("👀 Watching for HTML block changes... Press Ctrl+C to stop.")

try:
    while True:
        time.sleep(2)
except KeyboardInterrupt:
    observer.stop()
observer.join()
