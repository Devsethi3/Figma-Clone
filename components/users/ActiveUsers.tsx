import { useOthers, useSelf } from '@/liveblocks.config';
import React from 'react'
import { Avatar } from './Avatar';
import styles from './Avatar.module.css'
import { generateRandomName } from '@/lib/utils';

const ActiveUsers = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > 3;

    return (
        <main className="flex h-screen w-full select-none place-content-center place-items-center">
            <div className="flex pl-3">

                {currentUser && (
                    <div className="relative ml-8 first:ml-0">
                        <Avatar name="You" otherStyles="border-[3px] border-teal-500" />
                    </div>
                )}

                {users.slice(0, 3).map(({ connectionId, info }) => {
                    return (
                        <Avatar key={connectionId} name={generateRandomName()} otherStyles="-ml-3" />
                    );
                })}

                {hasMoreUsers && <div className={styles.more}>+{users.length - 3}</div>}


            </div>
        </main>
    )
}

export default ActiveUsers