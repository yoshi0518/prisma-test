# Base Image
FROM --platform=linux/amd64 mysql:8.2

# Copy my.conf file
# Docs: https://it-afi.com/mysql/mysql%E8%B5%B7%E5%8B%95%E5%A4%B1%E6%95%97%E3%80%82-warning-world-writable-config-file-etc-my-cnf-is-ignored/
ADD ./my.cnf /etc/mysql/my.cnf
RUN chmod 644 /etc/mysql/my.cnf
