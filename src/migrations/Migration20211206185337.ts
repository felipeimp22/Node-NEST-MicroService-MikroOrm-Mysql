import { Migration } from '@mikro-orm/migrations';

export class Migration20211206185337 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `user` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `unit_datasul` varchar(255) not null, `unit_shift` varchar(255) not null,`shift_user` varchar(255) not null, `state` varchar(255) not null, `unit_name` varchar(255) not null, `network` varchar(255) not null, `deleted` bool default(0) not null) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql(
      'alter table `user` add unique `user_shift_unique`(`shift_user`);',
    );

    this.addSql(
      'create table `user_profile` (`id` int unsigned not null auto_increment primary key, `user_id` int(11) unsigned not null, `profile` int(11) not null) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql(
      'alter table `user_profile` add index `user_profile_user_id_index`(`user_id`);',
    );

    this.addSql(
      'alter table `user_profile` add constraint `user_profile_user_id_foreign` foreign key (`user_id`) references `user` (`id`) on update cascade;',
    );
  }
}
