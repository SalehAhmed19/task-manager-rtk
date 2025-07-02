import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Modal({ isOpen, setIsOpen, title, children }) {
  //   let [isOpen, setIsOpen] = useState(true);

  //   function open() {
  //     setIsOpen(true);
  //   }

  //   function close() {
  //     setIsOpen(false);
  //   }

  return (
    <>
      {/* <Button
        onClick={open}
        className="px-4 py-2 text-sm font-medium text-white rounded-md bg-black/20 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
      >
        Open dialog
      </Button> */}

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="font-medium text-black text-base/7"
              >
                {title}
              </DialogTitle>
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
