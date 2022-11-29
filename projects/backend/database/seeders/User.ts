import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import Database from '@ioc:Adonis/Lucid/Database'

export default class extends BaseSeeder {

  //public static environment = ['development', 'testing']

  public async run () {
    // Write your database queries inside the run method
    
    const keyForSearch = "username"
    const users = [
      {
        username: 'Trandx',
        password:await Hash.make('test'),
      },
      {
        username: 'user1',
        password: await Hash.make('test'),
      },
    ]
    await User.updateOrCreateMany(
      keyForSearch,
      users
    )

    // CREATE ROLE user1 NOLOGIN;

    // CREATE ROLE group12 NOLOGIN;

    // GRANT ALL ON ALL TABLES IN SCHEMA public TO public;

    // CREATE POLICY  user_policy on Product USING(pg_has_role(createdby,CURRENT_USER,'MEMBER'));

    // GRANT group12 to user1,user2;

    // set role user1;
    
    //Database.raw();
    


  }
}
