import { Collection } from '@mikro-orm/core';
import { UserProfile } from './UserProfile';
export declare class User {
    id: number;
    network: string;
    name: string;
    shiftUser: string;
    state: string;
    unitName: string;
    unitDatasul: string;
    unitShift: string;
    deleted?: boolean;
    profile: Collection<UserProfile, unknown>;
}
