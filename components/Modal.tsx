import * as Dialog from '@radix-ui/react-dialog';
import { InfoCircledIcon as Icon } from '@radix-ui/react-icons';
import classNames from 'classnames';

interface IModal {
    title: string;
    children: React.ReactNode;
}

export function Modal({ title, children }: IModal) {
    return (
        <Dialog.Root>
            <Dialog.Trigger
                title="Open dialog with info about this component"
                className={classNames(
                    'bg-white text-verb p-2 rounded-full',
                    'ease-linear duration-200',
                    'hover:bg-verb hover:text-white transition-all',
                    'absolute bottom-4 right-4 z-50'
                )}>
                <Icon className="w-7 h-7" />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay
                    className={classNames(
                        'fixed inset-0 z-[90] opacity-70',
                        'bg-black',
                        'data-[state=open]:animate-overlayShow'
                    )}
                />
                <Dialog.Content
                    className={classNames(
                        'data-[state=open]:animate-contentShow',
                        'fixed z-[100]',
                        'top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
                        'max-h-[85vh] w-[90vw] max-w-[600px]',
                        'rounded-md bg-white',
                        'focus:outline-none'
                    )}>
                    <div className="bg-verb text-white px-4 py-4">
                        <Dialog.Title className="bg-verb text-white text-xl leading-tight">
                            {title} component info
                        </Dialog.Title>
                        <Dialog.Description className="text-xs leading-none relative">
                            Animations and Transitions used in {title} component
                        </Dialog.Description>
                    </div>

                    <div className="px-4 py-4">{children}</div>

                    <div className="bg-gray text-white flex justify-end px-4 py-2 mt-6">
                        <Dialog.Close asChild>
                            <button className="bg-verb text-white uppercase text-sm px-4 py-2 rounded-sm hover:bg-verb2 ease-linear transition-all duration-150">
                                Got it!
                            </button>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
