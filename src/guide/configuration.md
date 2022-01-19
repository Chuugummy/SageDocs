# Sage Configuration

## config.js
- ``bot_token`` - The token for your bot. If you don't have one, you can generate one by following the instructions at [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me).

    Must be a string (Discord token).

- ``use_random_statuses`` - Whether or not to use random cycling Discord statuses.

    Can be ``true`` or ``false``.

- ``bot_prefix`` - The prefix that Sage uses to identify commands.

    Can be a string or a number.

- ``web_interface_port`` - The port that the web interface will listen on.

    Must be a number.

- ``web_interface_password`` - The password for the default administrator account.

    Can be a string or ``null``.

- ``web_interface_urls`` - The URLs that the web interface will respond to.

    Can be an array of strings or ``*``.

- ``encryption_secret`` - The secret used to encrypt sensitive data.

    Must be a string.

- ``owner_id`` - The ID of the user that is the owner of the bot.

    Must be a number.

- ``notification_endpoint`` - The webhook endpoint to send notifications to.

    Can be a string or ``null``.

- ``origin_server_key`` - The key used to contact the origin Sage server.

    Must be a string.

    ::: warning
    We recommend that you do not change this value.
    :::