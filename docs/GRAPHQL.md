CREATE TABLE users (
id serial PRIMARY KEY,
username text NOT NULL unique,
name text NOT NULL,
about text,
is_admin boolean NOT NULL DEFAULT false,
created_at timestamptz NOT NULL DEFAULT now(),
updated_at timestamptz NOT NULL DEFAULT now()
);

comment on table users is 'A user of the platform.';
comment on table users.id is 'The primary unique identifier for the user.';
comment on table users.username is 'The primary unique username for the user.';

// Creates a user in the database

```js
mutation {
    createUser(
        input: {
            user: {
              email: "hello@martinwheeler.com.au"
              password: "password"
            }
        }
    ) {
        user {
            email
            password
        }
    }
}
```

// Get all users from the users table

```js
{
  allUsers {
    nodes {
      id
      userId
      email
      password
      createdOn
      modifiedOn
    }
  }
}
```

// Get a single user

```
{
    user(id: "WyJ1c2VycyIsIjYzYTIxZDRkLTVkMTctNDQ3OC1hZjIwLWMzMDZiZmIyOGMyZiJd") {
        email
        createdOn
        modifiedOn
    }
}
```
