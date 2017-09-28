FROM node:8.6.0

USER root

WORKDIR /home/

COPY entrypoint.sh /usr/local/bin/entrypoint.sh

RUN apt-get update && apt-get install --no-install-recommends -qqy --force-yes \
 apt-transport-https && \
 curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg |  apt-key add - && \
 echo "deb https://dl.yarnpkg.com/debian/ stable main" | \
 tee /etc/apt/sources.list.d/yarn.list && \
 apt-get update && apt-get install --no-install-recommends -qqy --force-yes \
 yarn rsync python-dev && \
 (cd /usr/local/; git clone https://github.com/facebook/watchman.git && \
  cd watchman && ./autogen.sh && ./configure && make && make install) && \
 apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENTRYPOINT ["/bin/bash", "/usr/local/bin/entrypoint.sh"]

VOLUME "/home"
