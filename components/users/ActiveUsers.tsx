import { useOthers, useSelf } from '@/liveblocks.config';
import React, { useMemo } from 'react'
import { Avatar } from './Avatar';
import styles from './Avatar.module.css'
import { generateRandomName } from '@/lib/utils';

const ActiveUsers = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > 3;

    const memoizedUsers = useMemo(() => {
        return (
            <main className="flex item-center justify-center gap-1 py-2">
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
    }, [users.length])

    return memoizedUsers;
}

export default ActiveUsers